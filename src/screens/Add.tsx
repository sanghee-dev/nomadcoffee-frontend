import { UseCreateCoffeeShop } from "apollo/coffeeShop/createCoffeeShop";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import routes from "router/routes";
import HelmetTitle from "components/HelmetTitle";
import FormBox from "components/auth/FormBox";
import BlueButton from "components/button/BlueButton";
import ErrorMessage from "components/text/ErrorMessage";
import capitalizeFn from "components/functions/capitalizeFn";

type FormData = {
  name: string;
  latitude: string;
  longitude: string;
  file?: HTMLImageElement;
  category?: string;
  result?: string;
  message?: string;
};

export default function Add() {
  const history = useHistory();
  let fileUrl = null;

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
    setError,
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmitValid = (data: any) => {
    console.log(data);

    if (loading) return;

    createCoffeeShop({
      variables: { ...data, ...(fileUrl?.length > 0 && { file: "hello" }) },
    });
  };
  const onCompleted = (data: any) => {
    const { name } = getValues();
    const {
      createCoffeeShop: { ok, error },
    } = data;
    if (!ok) {
      setError("result", { message: error });
    } else {
      history.push(routes.home, {
        message: `${capitalizeFn(name)} is created!`,
      });
    }
  };

  //
  const onFileChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      fileUrl = reader?.result;
      console.log(fileUrl);
    };
    reader.readAsDataURL(file);
  };

  const { createCoffeeShop, loading } = UseCreateCoffeeShop(onCompleted);

  return (
    <>
      <HelmetTitle title="Add" />

      <FormBox onSubmit={handleSubmit(onSubmitValid)}>
        <p style={{ fontSize: 20, marginBottom: 40 }}>
          Create your own coffee shop!
        </p>

        <input
          ref={register({ required: `Name is required.` })}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          ref={register({ required: `Latitude is required.` })}
          type="text"
          name="latitude"
          placeholder="Latitude"
        />
        <input
          ref={register({ required: `Longitude is required.` })}
          type="text"
          name="longitude"
          placeholder="Longitude"
        />
        <input ref={register} type="file" name="file" onChange={onFileChange} />
        <input
          ref={register}
          type="text"
          name="category"
          placeholder="Category"
        />

        <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        <ErrorMessage>{errors?.latitude?.message}</ErrorMessage>
        <ErrorMessage>{errors?.longitude?.message}</ErrorMessage>
        <ErrorMessage>{errors?.result?.message}</ErrorMessage>

        <BlueButton
          type="submit"
          value="Create"
          disabled={!isValid || loading}
        />
      </FormBox>
    </>
  );
}
