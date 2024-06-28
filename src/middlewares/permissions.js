"use strict";

module.exports = {
  isLogin: (req, res, next) => {
    if (req.user) {
      if (req.user.is_active) {
        next();
      } else {
        res.errorStatusCode = 403;
        throw new Error("Hata! Bu hesap aktif değil");
      }
    } else {
      res.errorStatusCode = 403;
      throw new Error("Hata! Giriş yapmadan bu işlemi yapamazsın");
    }
  },
  isAdmin: (req, res, next) => {
    if (req.user && req.user.is_admin) {
      next();
    } else {
      res.errorStatusCode = 403;
      throw new Error("Hata! Bu işlemi yapmak için yönetici olmalısın");
    }
  },
};
