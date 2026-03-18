import { useQuery } from "@tanstack/react-query";
import { userServices } from "../service/User/user";

export const useUser = () => {
	return useQuery({
		queryFn: () => userServices.getUser(),
	});
};
