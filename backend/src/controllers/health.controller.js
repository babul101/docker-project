import mongoose from "mongoose";

export function testResponse(request, response) {
  response.send("Hello from express with love");
}

export const ping = (request, response) => {
  mongoose.connection.db.admin().ping((error, result) => {
    if (error || !result) {
      response.send({
        message: `Ping fail with error: ${error}`,
        status: "fail",
      });
    }
    response.send({
      message: `Connection with mongodb is up :${result}`,
      status: "success",
    });
  });
};
