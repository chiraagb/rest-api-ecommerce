import Product from "../api/models/product.model.js";
import app from "../api/index.js";
import { expect, use } from "chai";
import chaiHttp from "chai-http";

const server = use(chaiHttp);

before(async () => {
  try {
    await Product.deleteMany({});
  } catch (error) {
    console.error(error);
  }
});

after(async () => {
  try {
    await Product.deleteMany({});
  } catch (error) {
    console.error(error);
  }
});

describe("products in the database", () => {
  it("should verify that we have 0 products in the DB", (done) => {
    server
      .request(app)
      .get("/api/routes/create-products")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        expect(res.body).to.have.lengthOf(0);
        done();
      });
  });

  it("should return status 200...", (done) => {
    server
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
