const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="font-serif text-2xl font-bold mb-2">La Brisa</p>
          <p className="text-background/80 mb-4">
            Restaurant Café
          </p>
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} La Brisa. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
