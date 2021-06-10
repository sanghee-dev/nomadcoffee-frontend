import { UseEditCoffeeShop } from "apollo/coffeeShop/editCoffeeShop";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import routes from "router/routes";
import HelmetTitle from "components/HelmetTitle";
import FormBox from "components/auth/FormBox";
import BlueButton from "components/button/BlueButton";
import RedButton from "components/button/RedButton";
import LabelButton from "components/button/LabelButton";
import ErrorMessage from "components/text/ErrorMessage";
import capitalizeFn from "components/functions/capitalizeFn";

type FormData = {
  name?: string;
  latitude?: string;
  longitude?: string;
  result?: string;
  file?: HTMLImageElement;
  category?: string;
  message?: string;
};

export default function Edit() {
  const history = useHistory();
  let pathnameId = +history.location.pathname.slice(6);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
    setError,
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmitValid = (data: any) => {
    if (loading) return;
    editCoffeeShop({
      variables: { ...data, id: pathnameId },
    });
  };
  const onCompleted = (data: any) => {
    const { name } = getValues();
    const {
      editCoffeeShop: { ok, error },
    } = data;
    if (!ok) {
      setError("result", { message: error });
    } else {
      history.push(routes.home, {
        message: `${capitalizeFn(name)} is edited!`,
      });
    }
  };

  const { editCoffeeShop, loading } = UseEditCoffeeShop(onCompleted);

  return (
    <>
      <HelmetTitle title="Edit" />

      <FormBox onSubmit={handleSubmit(onSubmitValid)}>
        <input ref={register} type="text" name="name" placeholder="Name" />
        <input
          ref={register}
          type="text"
          name="latitude"
          placeholder="Latitude"
        />
        <input
          ref={register}
          type="text"
          name="longitude"
          placeholder="Longitude"
        />
        <input ref={register} type="file" name="file" />
        <input
          ref={register}
          type="text"
          name="category"
          placeholder="Category"
        />

        <ErrorMessage>{errors?.result?.message}</ErrorMessage>

        <BlueButton type="submit" value="Edit" disabled={!isValid || loading} />
        <RedButton type="button" value="Delete" />
      </FormBox>

      <FormBox>
        <LabelButton>
          <Link to={routes.home}>
            <span>Go back to home</span>
          </Link>
        </LabelButton>
      </FormBox>
    </>
  );
}
