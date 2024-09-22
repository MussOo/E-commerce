import { createContext, useState, useEffect } from 'react';

// Création du contexte
const AuthContext = createContext();

// Fournisseur du contexte
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // État pour stocker l'utilisateur connecté
  const [token, setToken] = useState(null); // État pour stocker le token
  const [loading, setLoading] = useState(true); // État pour vérifier le chargement

  // Simuler la vérification d'authentification (Exemple: récupérer les données d'un token)
  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
    setLoading(false);
  }, []);

  // Fonction de login (à appeler après authentification réussie)
  const context_login = (token, userData) => {
    setUser(userData);
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Fonction de logout
  const context_logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  // Valeurs fournies à travers le contexte
  return (
    <AuthContext.Provider value={{ user, context_login, context_logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
