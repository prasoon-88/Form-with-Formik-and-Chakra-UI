  import { Button, Flex, Box } from "@chakra-ui/react";
  import React, { useEffect } from "react";
  import { useFormik } from "formik";
  import * as Yup from "yup";

  import FormInput from "../../components/formComponents/FormInput";
  import { IJobDetails } from "../../interface/forms";
  import {useContext } from 'react'
  import { Mycontext } from "@src/pages/_app";

  const JobDetailsForm: React.FC = () => {
    const {page,setPage,setVal,val} = useContext(Mycontext);

    const { handleChange, errors, touched, handleBlur, handleSubmit, values } =
      useFormik<IJobDetails>({
        initialValues: {
          jobTitle: "",
          jobDetails: "",
          jobLocation: "",
        },
        validationSchema: Yup.object().shape({
          jobTitle: Yup.string().required("Job Title is required"),
          jobDetails: Yup.string().required("Job Details is required"),
          jobLocation: Yup.string().required("Job Location is required"),
        }),
        onSubmit: (values) => {
            setPage(page+1)
          },
      });
      useEffect(() => {
        setVal({...val,...values})
      }, [values])
    return (
      <Box width="100%" as="form" onSubmit={handleSubmit as any}>
        <Box width="100%">
          <FormInput
            label="Job Title"
            placeholder="Enter job title"
            name="jobTitle"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.jobTitle}
            error={errors?.jobTitle}
            touched={touched?.jobTitle}
          />
          <FormInput
            label="Job Details"
            placeholder="Enter job details"
            name="jobDetails"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values?.jobDetails}
            error={errors?.jobDetails}
            touched={touched?.jobDetails}
          />
          <FormInput
            label="Job Location"
            name="jobLocation"
            placeholder="Enter job location"
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.jobLocation}
            touched={touched.jobLocation}
            value={values.jobLocation}
          />
          <Flex w="100%" justify="flex-end" mt="4rem" gap="20px">
            <Button colorScheme="gray" type="button" onClick={()=>{
                setPage(page-1)
            }}>
              Previous
            </Button>
            <Button colorScheme="red" type="submit">
              Next
            </Button>
          </Flex>
        </Box>
      </Box>
    );
  };

  export default JobDetailsForm;
