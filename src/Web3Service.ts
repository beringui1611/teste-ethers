import ethers from "ethers";
// Exemplo de endereço de um token ERC20
const tokenAddress = "0x6D12e18eeBe5Ab5C94651499c9fEf8d318F3FAe2";



export async function getName() {
  // Conecta-se a um nó Ethereum (por exemplo, Infura)
  // Crie uma instância de contrato ERC20
  const contract = new ethers.Contract(tokenAddress, "");

  try {
    // Chame o método name() do contrato
    const name = await contract.name();
    console.log("Nome do token:", name);
  } catch (error) {
    console.error("Erro ao recuperar o nome do token:", error);
  }
}

