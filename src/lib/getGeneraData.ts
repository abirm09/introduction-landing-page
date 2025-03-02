import config from "@/config";
import { TGeneral } from "@/types";

const GetGeneraData = async (): Promise<TGeneral | null> => {
  try {
    const gRes = await fetch(`${config.next_public_site_url}/api/general`, {
      next: { tags: ["general"] },
      cache: "force-cache",
    });
    const data = await gRes.json();
    return data?.data as TGeneral;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Failed to fetch general data", error);
    return null;
  }
};

export default GetGeneraData;
