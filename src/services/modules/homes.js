import configs from '../../configs';
import httpApi from '../../utils/http-handler';

const urls = configs.urls.homes;

export default {
    getHomeData(params) {
        const path = urls.getHomes;
        return httpApi.getRequest(path, params);
    },
    getHomeByIdData(id) {
        const path = urls.getHomeById(id);
        return httpApi.getRequest(path);
    }
};