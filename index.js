class AmelSonGroup {
    constructor(groupName, founder) {
      this.groupName = groupName;
      this.founder = founder;
      this.members = [];
      this.cryptoTools = [];
    }
  
    addMember(memberName) {
      this.members.push(memberName);
      console.log(`${memberName} has joined AmelSonGroup.`);
    }
  
    addCryptoTool(toolName, description) {
      const cryptoTool = {
        name: toolName,
        description: description,
      };
      this.cryptoTools.push(cryptoTool);
      console.log(`${toolName} has been added to the AmelSonGroup's suite of crypto tools.`);
    }
  
    provideMarketAnalysis(toolName) {
      const tool = this.cryptoTools.find(tool => tool.name === toolName);
      if (tool) {
        console.log(`AmelSonGroup is providing market analysis using ${toolName}.`);
        // Simulate market analysis based on the specified tool.
        // In a real scenario, you would include more sophisticated analysis.
      } else {
        console.log(`${toolName} is not part of the AmelSonGroup's crypto tools.`);
      }
    }
  
    displayGroupInfo() {
      console.log(`
        AmelSonGroup Information:
        Group Name: ${this.groupName}
        Founder: ${this.founder}
        Members: ${this.members.join(', ')}
        Crypto Tools: ${this.cryptoTools.map(tool => `${tool.name} - ${tool.description}`).join(', ')}
      `);
    }
  }
  
  // Example usage
  const amelSonCryptoGroup = new AmelSonGroup('AmelSon Crypto', 'Amelia');
  
  amelSonCryptoGroup.addMember('John');
  amelSonCryptoGroup.addMember('Emily');
  amelSonCryptoGroup.addCryptoTool('CryptoAnalyzer', 'Real-time market analysis tool');
  amelSonCryptoGroup.addCryptoTool('SecureWallet', 'Encrypted digital wallet for cryptocurrencies');
  
  amelSonCryptoGroup.provideMarketAnalysis('CryptoAnalyzer');
  amelSonCryptoGroup.displayGroupInfo();
  