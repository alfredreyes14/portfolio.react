# 1. Use the official Node.js image as base
FROM node:20-alpine

# 2. Set the working directory
WORKDIR /app

# 3. Copy package files first and install dependencies
COPY package.json .
RUN npm install

# 4. Copy the rest of the app
COPY . .

# 5. Build the Next.js app
RUN npm run build

# 6. Expose the default Next.js port
EXPOSE 3000

# 7. Start the app
CMD ["npm", "run", "start"]