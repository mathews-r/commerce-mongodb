db.produtos.updateMany(
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: new Date() } },
);
db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { nome: true, _id: false },
);
