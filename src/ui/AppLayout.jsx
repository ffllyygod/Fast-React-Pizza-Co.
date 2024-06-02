import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";
import { Outlet, useNavigation } from "react-router-dom";
export const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};