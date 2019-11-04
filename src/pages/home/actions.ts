export const HOME_INFORMATION = "HOME_INFORMATION";

interface HomeInformation {
	type: typeof HOME_INFORMATION,
	payload : string
}

export type homeActions = HomeInformation

export const homeInformation = () => ({
	type : HOME_INFORMATION,
	payload: "HOME"
});

export type homeResponse = {
	status: number,
	data: any
}
