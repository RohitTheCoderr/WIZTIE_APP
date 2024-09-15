import { Button, TextInput } from "@/components/form";
import { Formik, Form } from 'formik';
import { updateName } from "@/services/lib/YupFormikValidator";
import { toast } from 'react-toastify';
import { patchData } from "@/services/apiCall";

function UpdateName() {

    async function submitForm(values, actions) {
        console.log("username is ",values);
        
        try {
            const saveName = patchData("/user/update_Name", values);
            toast.promise(
                saveName, {
                pending: "User Name is being saved...",
                success: "User Name saved successfully!",
                error: "User Name couldn't be saved."
            }
            );

            await saveName;
            actions.resetForm();
        }
        catch (error) {
            toast.error(error?.response?.data?.message || "An error occurred.");
        }}

  return (
    <div>            
            <h2 className="uppercase text-[#db4444] font-bold">update name</h2>
            <div>

                <Formik
                    initialValues={updateName.initialValues}
                    enableReinitialize
                    validationSchema={updateName.validationSchema}
                    onSubmit={submitForm}
                >
                    {() => (
                        <Form action="">
                            <TextInput label="Full Name *" name={"name"} type="text" />
                            <Button type={"submit"} name={"SAVE ADDRESS"} style="w-[100%] my-0 mb-2" />
                        </Form>
                    )}
                </Formik>
            </div>

    </div>
  )
}

export default UpdateName