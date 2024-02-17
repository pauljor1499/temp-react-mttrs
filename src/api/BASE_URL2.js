const BASE_URL = "https://api.mathmatters.xyz";
const VERSION = "v1";

export class BaseURL {
    usersEndpoint() {
        return `${BASE_URL}/${VERSION}/users`;
    }

    classesEndpoint() {
        return `${BASE_URL}/${VERSION}/classes`;
    }
}
