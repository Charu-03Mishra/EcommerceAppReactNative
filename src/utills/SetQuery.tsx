type Filter = {
	subCategory: string;
	category: string;
};

export const mongoQueryBuilder = (filter: any) => {
	const query: any = {};
	const options = {
		collation: "",
		sort: {},
		populate: "",
		projection: "",
		lean: false,
		leanWithId: true,
		page: filter?.page || 1,
		limit: filter?.limit || 10,
		pagination: true,
		useEstimatedCount: false,
		useCustomCountFn: false,
		forceCountFn: false,
		read: {},
		options: {},
	};

	/* filter Category */
	if (filter?.subCategory) {
		query.subCategory = { $regex: filter?.subCategory, $options: "i" };
	}
	if (filter?.category) {
		query.category = { $regex: filter?.category, $options: "i" };
	}

	return {
		query,
		options,
		isCountOnly: false,
	};
};
