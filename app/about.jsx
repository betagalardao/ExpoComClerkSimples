import { View, Text, StyleSheet, Linking, TouchableOpacity, Share } from 'react-native';

export default function About() {
  const sendEmail = () => {
    Linking.openURL('mailto:robertagalardao@gmail.com');
  };

  const openGitHub = () => {
    Linking.openURL('https://github.com/betagalardao/ExpoComClerkSimples');
  };

  const onShare = async () => {
      try {
        await Share.share(
          {
            message: "Baixe agora em: https://videira.ifc.edu.br",
            url: "https://videira.ifc.edu.br",
          },
          { dialogTitle: "Compartilhar" }
        );
      } catch (error) {
        console.error("Erro ao compartilhar:", error.message);
      }
    };

  return (
    <View style={styles.container}>

      {/* Grupo dos cards */}
      <View style={styles.cardsContainer}>
        <View style={[styles.card, { marginBottom: 15 }]}>
          <Text style={styles.sectionTitle}>Sobre o App:</Text>
          <Text style={styles.text}>Desenvolvido por:</Text>
          <Text style={styles.text}>Roberta Elis Galardão</Text>
          <Text style={styles.text}>Versão: 1.0.0</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Contato e Redes:</Text>

          {/* enviar o email para contato */}
          <TouchableOpacity onPress={sendEmail}>
            <Text style={styles.link}>Entrar em contato por e-mail</Text>
          </TouchableOpacity>

           {/* abrir git com codigo */}
          <TouchableOpacity onPress={openGitHub}>
            <Text style={styles.link}>Ver no GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* botao de compartilhar */}
      <TouchableOpacity style={styles.shareButton} onPress={onShare}>
        <Text style={styles.shareButtonText}>Compartilhar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  cardsContainer: {
    flexShrink: 1,
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '98%',
    alignSelf: 'center',
  },
  sectionTitle: {
    marginTop: 1,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 16,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  link: {
    marginTop: 10,
    color: '#007AFF',
    fontSize: 16,
    textDecorationLine: 'underline',
    alignSelf: 'flex-start',
  },
  shareButton: {
    width: '40%',
    backgroundColor: '#87ceeb',
    borderRadius: 15,
    paddingVertical: 15,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 3,  
  },
  shareButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFAF0',
  },
  
});
