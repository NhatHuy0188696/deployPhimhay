import * as request from '~/utills/httpRequest';
export const Search = async (api_key, query) => {
    try {
        const res = await request.get('movie?&language=en-US&page=1&include_adult=false&', {
            params: {
                api_key,
                query,
            },
        });
        return res.results;
    } catch (error) {
        console.log(error);
    }
};
