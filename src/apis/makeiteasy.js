import axios from "axios";

export const HTTP = axios.create({
	baseURL: `http://mic-leads.dev-test.makeiteasy.com/api/v1/`,
	headers: {
		Accept: "application/json"
	}
});
