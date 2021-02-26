// Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "clients_trans",
    },
  },
]);
// Selecione quatro clientes com as suas respectivas transações recebidas;
db.clients.aggregate([
    {
      $lookup: {
        from: "transactions",
        localField: "name",
        foreignField: "to",
        as: "clientsReceb_trans",
      },
    },
  ]);
// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
