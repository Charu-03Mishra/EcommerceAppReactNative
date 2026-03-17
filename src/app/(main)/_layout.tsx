import { Drawer } from "expo-router/drawer";
import CustomDrawer from "../../component/CustomerDrawer/CustomDrawer";

export default function DrawerLayout() {
	return (
		<Drawer
			drawerContent={(props) => <CustomDrawer {...props} />}
			screenOptions={{
				headerShown: false,
			}}></Drawer>
	);
}
