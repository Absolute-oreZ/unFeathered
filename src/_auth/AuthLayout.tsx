import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <section className="flex flex-1 justify-center items-center flex-col py-10">
        <Outlet />
      </section>

      <div className="hidden xl:block w-1/2 h-screen">
        <img
          src="/assets/images/Side Image.svg"
          alt="logo"
          className="h-full w-full object-cover bg-no-repeat px-10"
          style={{ objectFit: 'contain' }}
        />
      </div>
    </>
  );
}
