# Use Nginx for web server
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy built files from the builder image
COPY --from=ex05-builder /ex05/dist .

# Expose port 80 for the web server
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
