export const HOME_INFORMATION = "HOME_INFORMATION";
export const HOME_SIDE_EFFECT = "HOME_SIDE_EFFECT";

interface HomeSideEffect {
	type: typeof HOME_SIDE_EFFECT,
	payload : string
}

interface HomeInformation {
	type: typeof HOME_INFORMATION,
	payload : string
}

export type homeActions = HomeInformation|HomeSideEffect

export const homeInformation = () => ({
	type : HOME_INFORMATION,
	payload: "HOME"
});

export type homeResponse = {
	status: number,
	data: any
}
