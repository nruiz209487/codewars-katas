# Imagen base con Python
FROM python:3.12-slim

# Instalar Node.js (última LTS)
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Crear directorio de trabajo
WORKDIR /workspace

# Mantener el contenedor abierto en bash
CMD ["bash"]
