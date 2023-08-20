import { getCurrentUser } from "@/lib/session";

const Home = async () => {
  // const session  = await getCurrentUser()
  return (
    <section className="flex-start flex-col paddings mb-16">
      {/* {session?.user ? (
        <>
          <h1>Main page</h1>
        </>
      ) : (
        <div>
          <h1> Login page</h1>
        </div>
      )} */}

      <h1>Categories</h1>
      <h1>Post</h1>
      <h1>LoadMore</h1>
    </section>
  );
};

export default Home;
