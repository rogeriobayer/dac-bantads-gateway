import httpProxy from "express-http-proxy";
const httpProxyItem = httpProxy

export const getAllUsers = httpProxyItem("http://localhost:5000", {
  proxyReqBodyDecorator: function (bodyContent, originalReq) {

    return bodyContent;
  },
  proxyReqOptDecorator: function (proxyReqOpts, originalReq) {
    proxyReqOpts.headers["Content-Type"] = "application/json";
    proxyReqOpts.method = "GET";
    return proxyReqOpts;
  },
  userResDecorator: function (proxyRes, proxyResData, userReq, userRes) {
    if (proxyRes.statusCode == 200) {
      let str = Buffer.from(proxyResData).toString("utf-8");
      let objBody = JSON.parse(str);
      userRes.status(200);
      return { data: objBody };
    } else {
      userRes.status(401);
      return { auth: false, message: "Falha ao obter usuários" };
    }
  },
});

export const insertUser = httpProxyItem("http://localhost:5000", {
  proxyReqBodyDecorator: function (bodyContent, originalReq) {

      return bodyContent;
  },
  proxyReqOptDecorator: function (proxyReqOpts, originalReq) {
    proxyReqOpts.headers["Content-Type"] = "application/json";
    proxyReqOpts.method = "POST";
    return proxyReqOpts;
  },
  userResDecorator: function (proxyRes, proxyResData, userReq, userRes) {
    if (proxyRes.statusCode == 200) {
      let str = Buffer.from(proxyResData).toString("utf-8");
      let objBody = JSON.parse(str);
      userRes.status(200);
      return { data: objBody };
    } else {
      userRes.status(401);
      return { auth: false, message: "Falha ao criar usuário"};
    }
  },
});

export const editUser = httpProxyItem("http://localhost:5000", {
  proxyReqBodyDecorator: function (bodyContent, originalReq) {

      return bodyContent;
  },
  proxyReqOptDecorator: function (proxyReqOpts, originalReq) {
    proxyReqOpts.headers["Content-Type"] = "application/json";
    proxyReqOpts.method = "PUT";
    return proxyReqOpts;
  },
  userResDecorator: function (proxyRes, proxyResData, userReq, userRes) {
    if (proxyRes.statusCode == 200) {
      let str = Buffer.from(proxyResData).toString("utf-8");
      let objBody = JSON.parse(str);
      userRes.status(200);
      return { data: objBody };
    } else {
      userRes.status(401);
      return { auth: false, message: "Falha ao editar usuário"};
    }
  },
});

export const getUserById = httpProxyItem("http://localhost:5000", {
  proxyReqBodyDecorator: function (bodyContent, originalReq) {

      return bodyContent;
  },
  proxyReqOptDecorator: function (proxyReqOpts, originalReq) {
    proxyReqOpts.headers["Content-Type"] = "application/json";
    proxyReqOpts.method = "GET";
    return proxyReqOpts;
  },
  userResDecorator: function (proxyRes, proxyResData, userReq, userRes) {
    if (proxyRes.statusCode == 200) {
      let str = Buffer.from(proxyResData).toString("utf-8");

      let objBody = JSON.parse(str);
      userRes.status(200);
      return { data: objBody };
    } else {
      userRes.status(401);
      return { auth: false, message: "Falha ao criar usuário"};
    }
  },
});

export const deleteUserById = httpProxyItem("http://localhost:5000", {
  proxyReqBodyDecorator: function (bodyContent, originalReq) {

      return bodyContent;
  },
  proxyReqOptDecorator: function (proxyReqOpts, originalReq) {
    proxyReqOpts.headers["Content-Type"] = "application/json";
    proxyReqOpts.method = "DELETE";
    return proxyReqOpts;
  },
  userResDecorator: function (proxyRes, proxyResData, userReq, userRes) {
    if (proxyRes.statusCode == 200) {
      let str = Buffer.from(proxyResData).toString("utf-8");

      let objBody = JSON.parse(str);
      userRes.status(200);
      return { data: objBody };
    } else {
      userRes.status(401);
      return { auth: false, message: "Falha ao deletar usuário"};
    }
  },
});
