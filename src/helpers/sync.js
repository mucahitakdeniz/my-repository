"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// sync():

module.exports = async function () {
  // return null;

  /* REMOVE DATABASE *
    const { mongoose } = require('../configs/dbConnection')
    await mongoose.connection.dropDatabase()
    console.log('- Database and all data DELETED!')
    /* REMOVE DATABASE */

  /* User */

  /*
  const User = require("../models/user");
  await User.deleteMany(); // !!! Clear collection.
  await User.create({
    _id: "65ba90b9b47ed0a4b115492b",
    user_name: "admin",
    email: "admin@site.com",
    password: "aA?123456",
    first_name: "admin",
    last_name: "admin",
    image:
      "https://th.bing.com/th/id/OIP.Npf18M-AjkJBKfSKjvoW_gHaHa?w=201&h=201&c=7&r=0&o=5&pid=1.7",
    bio: "I am  Admin",
    is_active: true,
    is_admin: true,
  });
  await User.create({
    _id: "65b94604db0b79ec2b81bbe7",
    user_name: "Test",
    email: "test2@site.com",
    password: "aA?123456",
    first_name: "test1",
    last_name: "test",
    image: "url",
    is_active: true,
    is_admin: false,
  });
  await User.create({
    _id: "65343222b67e9681f937f003",
    user_name: "test",
    password: "aA?123456",
    email: "test@site.com",
    first_name: "test",
    last_name: "test",
    is_active: true,
    is_staff: false,
    is_superadmin: false,
  }); */

  // Category;

  /* 
  const Category = require("../models/category");
  await Category.deleteMany(); // !!! Clear collection.
  await Category.create({
    _id: "65baab77a9f41227c047d898",
    name: "Magazine",
  });
  await Category.create({
    _id: "65baab7ea9f41227c047d89a",
    name: "Sport",
  });
  await Category.create({
    _id: "65baab87a9f41227c047d89c",
    name: "News",
  });
  await Category.create({
    _id: "65baab9ca9f41227c047d89e",
    name: "Travel",
  });
  await Category.create({ _id: "65baabb1a9f41227c047d8a0", name: "Health" });
  await Category.create({
    _id: "65baabbba9f41227c047d8a2",
    name: "Technology",
  });
  await Category.create({
    _id: "65bf7904556ec946363bfff8",
    name: "Fashion",
  });
  await Category.create({ _id: "65bf791d556ec946363bfffa", name: "Trivia" });
  await Category.create({
    _id: "65bf7932556ec946363bfffc",
    name: "Web Development",
  });
  await Category.create({ _id: "65bf793f556ec946363bfffe", name: "Science" }); */

  /* Blog */

  /*
  const Blog = require("../models/blog");
  await Blog.deleteMany(); // !!! Clear collection.
  await Blog.create({
    author: "Test",
    author_id: "65b94604db0b79ec2b81bbe7",
    title: "Maldivler",
    content:
      "Maldivler ya da resmî adıyla Maldivler Cumhuriyeti, Hint Okyanusu'nda 1.200 adadan oluşan bir devlettir. Hindistan'ın güneyinde ve Sri Lanka'nın yaklaşık 750 kilometre güneybatısında yer alır. Küresel iklim değişiklikleri yüzünden yüz yıl içerisinde sular altında kalacağı öngörülmektedir.",
    status: "p",
    category_id: "65bf791d556ec946363bfffa",
    image:
      "https://th.bing.com/th?id=OSK.HERO7euOg-s_FnNCfOsc6s_-mDCSa1NNAZhk_G9fN31glJI&w=296&h=176&c=1&rs=2&o=6&pid=SANGAM",
  });
  await Blog.create({
    author: "Test",
    author_id: "65b94604db0b79ec2b81bbe7",
    image:
      "https://th.bing.com/th/id/OIP.s4Owt_DFJzU5XqxwgM7yoAHaHa?w=192&h=190&c=7&r=0&o=5&pid=1.7",
    title: "My blog",
    content: "Futbol...",
    status: "p",
    category_id: "65bf791d556ec946363bfffa",
  });
  await Blog.create({
    author: "Test",
    author_id: "65b94604db0b79ec2b81bbe7",
    title: "React",
    content:
      "React kullanıcı arayüzü oluşturmaya yarayan açık kaynak kodlu bir javascript kütüphanesidir.",
    status: "p",
    image:
      "https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?w=208&h=208&c=7&r=0&o=5&pid=1.7",
    category_id: "65bf791d556ec946363bfffa",
  });
  await Blog.create({
    author: "Test",
    author_id: "65b94604db0b79ec2b81bbe7",
    title: "JavaScript",
    content:
      "JavaScript, HTML ve CSS ile birlikte World Wide Web'in temel teknolojilerinden biri olan programlama dilidir. Web sitelerinin %97'sinden fazlası, web sayfası hareketleri için istemci tarafında JavaScript kullanırlar ve kullanılan kodlar genellikle üçüncü taraf kitaplıkları içerir. Tüm büyük web tarayıcılarında, kaynak kodunu kullanıcıların cihazlarında yürütebilmek için özel bir JavaScript motoru bulunur..",
    status: "p",
    image:
      "https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?w=208&h=208&c=7&r=0&o=5&pid=1.7",
    category_id: "65bf7932556ec946363bfffc",
  });
  await Blog.create({
    author: "Test",
    author_id: "65b94604db0b79ec2b81bbe7",
    title: "Prof. Dr. Aziz Sancar",
    content:
      "Nobel Kimya Ödülü, 1901'den bu yana her yıl kimya alanında insanlığa önemli katkı sunan kişilere veriliyor. 1901'den bu yana her yıl verilen ödülü, 2015'te Türk bilim insanı Prof. Dr. Aziz Sancar kazanmıştı. Sancar, Nobel Ödülü kazanan ilk Türk bilim insanı olmuştu.",
    status: "p",
    image:
      "https://th.bing.com/th/id/OIP.-PyktR4rarbSOk-KtPfkyAHaFB?w=233&h=180&c=7&r=0&o=5&pid=1.7",
    category_id: "65bf793f556ec946363bfffe",
  });
  await Blog.create({
    author: "Test",
    author_id: "65b94604db0b79ec2b81bbe7",
    title: "Liverpool",
    content:
      "Liverpool Football Club Merseyside, Liverpool'da kurulmuş İngiltere'nin en köklü futbol kulüplerinden birisidir. Kurulduğu yıl olan 1892'den beri, 6 Şampiyonlar Ligi şampiyonluğu, 3 UEFA kupası şampiyonluğu, 19 Premier League şampiyonluğu ve 8 FA Cup şampiyonluğu elde etmiştir. İngiliz kulüpleri arasında en fazla lig şampiyonu olan ikinci takımdır. Ayrıca toplamda en fazla sayıda kupası bulunan kulüptür.[2] Kulübün stadyumu 53.394 kapasiteli Anfield stadyumudur. Lakabı ambleminde de olduğu gibi Kırmızı Anka Kuşları'dır ancak Kırmızılar olarak bilinir. Kulübün sloganı 'You'll Never Walk Alone' (asla yalnız yürümeyeceksin), en ateşli olarak bilinen taraftar grubu ise The Kop'tur.",
    status: "p",
    image:
      "https://th.bing.com/th/id/OIP.ef_IfKEAsDlUBpLbbeFZEwHaFM?w=206&h=180&c=7&r=0&o=5&pid=1.7",
    category_id: "65baab7ea9f41227c047d89a",
  }); */

  /* Finished */
  console.log("* Synchronized.");
};
