const app = require("../app.ts");
const supertest = require("supertest");
const request = supertest(app);

describe("Area Calculations", () => {
  jest.setTimeout(30000);

  it("tests the GET endpoint for All area calculations", async (done) => {
    const response = await request.get("/fetchRecords");
    const statusCode = response.statusCode;

    if (statusCode === 200) {
      expect(response.body.length).toBeGreaterThan(0);
    } else if (statusCode === 404) {
      let statusMessage = response.body.message;
      expect(statusMessage.message).toBe(
        "Database is empty, make a new area calculation"
      );
    }
    done();
  });

  it("tests the calculation for area of a Square - POST", async (done) => {
    let details = {
      shape: "Square",
      dimension: 7,
    };
    const response = await request.post("/calculate/square").send(details);
    expect(response.statusCode).toEqual(201);
    expect(response.body.area).toEqual(49);
    done();
  });

  it("tests the calculation for area of a Rectangle - POST", async (done) => {
    let details = {
      shape: "Rectangle",
      dimension: { a: 7, b: 10 },
    };
    const response = await request.post("/calculate/rectangle").send(details);
    expect(response.statusCode).toEqual(201);
    expect(response.body.area).toEqual(70);
    done();
  });

  it("tests the calculation for area of a Circle - POST", async (done) => {
    let details = {
      shape: "Circle",
      dimension: 7,
    };
    const response = await request.post("/calculate/circle").send(details);
    expect(response.statusCode).toEqual(201);
    expect(response.body.area).toBe(153.94);
    done();
  });

  it("tests the calculation for area of a Triangle - POST", async (done) => {
    let details = {
      shape: "Triangle",
      dimension: { a: 3, b: 4, c: 5 },
    };
    const response = await request.post("/calculate/triangle").send(details);
    expect(response.statusCode).toEqual(201);
    expect(response.body.area).toEqual(6);
    done();
  });
});

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 10000)); // avoid jest open handle error
});
