const express = require("express");
const router = express.Router();
const { busData } = require("../Controller/BusContoller");
const BusData = [
  {
    busId: 1,
    name: "bus1",
    from: "Pune",
    to: "Mumbai",
    departureTime: "2.00pm",
    totalTime: "4 hours",
    price: "1000/-",
  },
  {
    busId: 2,
    name: "bus2",
    from: "Pune",
    to: "Banglore",
    departureTime: "2.00pm",
    totalTime: "4 hours",
    price: "1000/-",
  },
  {
    busId: 3,
    name: "bus3",
    from: "Pune",
    to: "Ratnagiri",
    departureTime: "2.00pm",
    totalTime: "4 hours",
    price: "1000/-",
  },
  {
    busId: 4,
    name: "bus3",
    from: "Pune",
    to: "Ratnagiri",
    departureTime: "2.00pm",
    totalTime: "4 hours",
    price: "1000/-",
  },
  {
    busId: 5,
    name: "bus3",
    from: "Pune",
    to: "Ratnagiri",
    departureTime: "2.00pm",
    totalTime: "4 hours",
    price: "1000/-",
  },
];
router.route("/bus").get(busData);
// router.route("/bus").get(async (req, res) => {
//   res.send(BusData);
// });
// router.route("/createbus").post()
// router.route(":/id").get().put().delete()

module.exports = router;
