// {
//     _id: 1,
//     item: "abc",
//     price: NumberDecimal("10"),
//     quantity: NumberInt("2"),
//     date: ISODate("2014-03-01T08:00:00Z")
//   },
//   {
//     _id: 2,
//     item: "jkl",
//     price: NumberDecimal("20"),
//     quantity: NumberInt("1"),
//     date: ISODate("2014-03-01T09:00:00Z")
//   },
//   {
//     _id: 3,
//     item: "xyz",
//     price: NumberDecimal("5"),
//     quantity: NumberInt( "10"),
//     date: ISODate("2014-03-15T09:00:00Z")
//   },
//   {
//     _id: 4,
//     item: "xyz",
//     price: NumberDecimal("5"),
//     quantity:  NumberInt("20"),
//     date: ISODate("2014-04-04T11:21:39.736Z")
//   },
//   {
//     _id: 5,
//     item: "abc",
//     price: NumberDecimal("10"),
//     quantity: NumberInt("10"),
//     date: ISODate("2014-04-04T21:23:13.331Z")
//   },
//   {
//     _id: 6,
//     item:"def",
//     price: NumberDecimal("7.5"),
//     quantity: NumberInt("5" ),
//     date: ISODate("2015-06-04T05:08:13Z")
//   },
//   {
//     _id: 7,
//     item: "def",
//     price: NumberDecimal("7.5"),
//     quantity: NumberInt("10"),
//     date: ISODate("2015-09-10T08:43:00Z")
//   },
//   {
//     _id: 8,
//     item: "abc",
//     price: NumberDecimal("10"),
//     quantity: NumberInt("5" ),
//     date: ISODate("2016-02-06T20:20:13Z")
//   }

db.sales.aggregate([
  {
    $group: {
      _id: "$item",
      count: { $sum: 1 },
    },
  },
]);

//   { "_id" : "abc", "count" : 3 }
//   { "_id" : "def", "count" : 2 }
//   { "_id" : "xyz", "count" : 2 }
//   { "_id" : "jkl", "count" : 1 }

db.sales.aggregate([
  {
    $group: {
      _id: "$item",
      totalSaleAmount: {
        $sum: {
          $multiply: ["$price", "$quantity"],
        },
      },
    },
  },
]);

// { "_id" : "def", "totalSaleAmount" : NumberDecimal("112.5") }
// { "_id" : "abc", "totalSaleAmount" : NumberDecimal("170") }
// { "_id" : "jkl", "totalSaleAmount" : NumberDecimal("20") }
// { "_id" : "xyz", "totalSaleAmount" : NumberDecimal("150") }

// AGRUPAR TUDO:
db.sales.aggregate([
  {
    $group: {
      _id: null,
      totalSaleAmount: {
        $sum: { $multiply: ["$price", "$quantity"] },
      },
      averageQuantity: { $avg: "$quantity" },
      count: { $sum: 1 },
    },
  },
]);

// {
//     "_id" : null,
//     "totalSaleAmount" : NumberDecimal("452.5"),
//     "averageQuantity" : 7.875,
//     "count" : 8
//   }
