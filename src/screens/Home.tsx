import { UseSeeAllShops } from "apollo/coffeeShop/seeAllShops";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import HelmetTitle from "components/HelmetTitle";
import FeedBox from "components/feed/FeedBox";
import Picture from "components/photo/Picture";
import Avatar from "components/photo/Avatar";
import UserColumn from "components/feed/UserColumn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import NameColumn from "components/feed/NameColumn";
import capitalizeFn from "components/functions/capitalizeFn";

type FormData = {
  message?: string;
};

export default function Home() {
  const data = UseSeeAllShops();
  const location = useLocation<FormData>();

  return (
    <>
      <HelmetTitle title="Shop" />

      <FeedBox>
        <>
          <h1>Coffee Shop</h1>
          <h1>{location?.state?.message}</h1>
        </>
      </FeedBox>

      {data?.seeAllShops?.coffeeShops?.map((coffeeShop) => (
        <FeedBox key={coffeeShop?.id}>
          <UserColumn>
            <div>
              <Avatar
                key={coffeeShop?.user?.id}
                url={coffeeShop?.user?.avatarURL || ""}
              />
              <h2>{coffeeShop?.user.username}</h2>
            </div>

            <Link to={`/shop/${coffeeShop?.id}`}>
              <FontAwesomeIcon icon={faEllipsisH} style={{ fontSize: 17 }} />
            </Link>
          </UserColumn>

          <NameColumn>
            <h1>{capitalizeFn(coffeeShop?.name)}</h1>
            {coffeeShop?.categories?.map((category) => (
              <h1 key={category?.id}>{category?.name}</h1>
            ))}
          </NameColumn>

          {coffeeShop?.photos?.map((photo) => (
            <Picture key={photo?.id} url={photo?.url} />
          ))}
        </FeedBox>
      ))}
    </>
  );
}
