import instance from '../services/axios.config'
import MockAdapter from "axios-mock-adapter"
import modules from "./modules";

const mock = new MockAdapter(instance);

mock.onGet("/posts", {}).reply(200, []);

modules.forEach(m => {
    if (m.method === "GET") mock.onGet(m.urls, {}).reply(m.code, m.data);
    else if (m.method === "POST") mock.onPost(m.urls, {}).reply(m.code, m.data);
    else if (m.method === "PATCH") mock.onPatch(m.urls, {}).reply(m.code, m.data);
    else if (m.method === "DELETE") mock.onDelete(m.urls, {}).reply(m.code, m.data);
});