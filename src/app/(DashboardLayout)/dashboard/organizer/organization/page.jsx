"use client";

import DashboardHeading from "@/Components/Apps/Dashboard/DashboardHeading/DashboardHeading";
import { addOrinization } from "@/lib/api/organization/actions";
import { myOrganization } from "@/lib/api/organization/data";
import { useSession } from "@/lib/auth-client";
import { UploadImage } from "@/Utils/UploadImage";
import { Button, Card, CardHeader, Form, Input, TextArea } from "@heroui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaImage } from "react-icons/fa";

const OrganizationPage = () => {
  const { data: session } = useSession();
  const [myOrg, setMyOrg] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const setOrgData = async () => {
      const org = await myOrganization(session?.user.email);
      setMyOrg(org);
    };
    setOrgData();
  }, [session]);

  const OrganizationonSubmit = async (data) => {
    const imageFile = data.logo[0];
    const imageUrl = await UploadImage(imageFile);

    const orgData = {
      organizationName: data.organizationName,
      logo: imageUrl,
      website: data.website,
      description: data.description,
      organizerEmail: session.user.email,
    };

    const resData = await addOrinization(orgData);
    console.log(resData);

    if (resData.insertedId) {
      toast.success("Orinization Profile added");
    }
  };

  return (
    <div>
      <DashboardHeading
        title={"My Organization Profile"}
        description={
          "Update Orgnization logo, profile, websites and description"
        }
      />

      {/* Form  */}
      <div className="mt-6 space-y-6 max-w-3xl mx-auto">
        <Card
          className="border border-white/5 bg-slate-900/40 backdrop-blur-xl shadow-2xl rounded-2xl"
          radius="lg"
        >
          <CardHeader className="flex flex-col gap-1 pb-4 border-b border-white/5 p-6">
            <h3 className="text-xl font-bold text-white">
              Organization Details
            </h3>
            <p className="text-slate-400 text-xs">
              Review and edit your organization credentials.
            </p>
          </CardHeader>
          <div className="p-6">
            <Form
              onSubmit={handleSubmit(OrganizationonSubmit)}
              className="space-y-4 w-full"
            >
              <Input
                defaultValue={myOrg?.organizationName}
                {...register("organizationName", {
                  required: "OrganizationName is Required",
                })}
                id="organizationName"
                label="Organization Name"
                labelPlacement="outside"
                placeholder="TechEvents Corp"
                required
                className="w-full bg-slate-900/50 border-white/10 hover:border-pink-500/50 focus-within:border-pink-500!"
              />
              {errors.organizationName && (
                <p className="text-red-500">
                  {errors.organizationName.message}
                </p>
              )}

              <Input
                // defaultValue={myOrg?.logo}
                {...register("logo", {
                  required: "Logo is Required",
                })}
                type="file"
                accept="image/*"
                id="logo"
                placeholder="https://example.com/avatar.jpg"
                labelPlacement="outside"
                startContent={<FaImage className="text-slate-400 text-sm" />}
                className="w-full bg-slate-900/50 border-white/10 hover:border-pink-500/50 focus-within:border-pink-500!"
              />
              {errors.logo && (
                <p className="text-red-500">{errors.logo.message}</p>
              )}

              <Input
                defaultValue={myOrg?.website}
                {...register("website", {
                  required: "OrganizationWebsite is Required",
                })}
                id="website"
                label="Organization Website"
                labelPlacement="outside"
                placeholder="techevents.corp"
                required
                className="w-full bg-slate-900/50 border-white/10 hover:border-pink-500/50 focus-within:border-pink-500!"
              />
              {errors.organizationWebsite && (
                <p className="text-red-500">
                  {errors.organizationWebsite.message}
                </p>
              )}

              <TextArea
                defaultValue={myOrg?.description}
                {...register("description", {
                  required: "Description is Required",
                })}
                id="description"
                label="Description"
                labelPlacement="outside"
                placeholder="Hosting global developer conferences and software hacking marathons."
                required
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none min-h-25 text-white text-sm"
              />
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}

              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold h-11 px-6 shadow-lg"
                  radius="lg"
                >
                  Save Changes
                </Button>
              </div>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OrganizationPage;
