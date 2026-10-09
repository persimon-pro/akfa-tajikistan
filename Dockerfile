FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy all site assets and HTML
COPY . /usr/share/nginx/html/

# Remove builder scripts and git artifacts if any
RUN rm -rf /usr/share/nginx/html/Dockerfile /usr/share/nginx/html/nginx.conf \
           /usr/share/nginx/html/builder.py /usr/share/nginx/html/downloader.py \
           /usr/share/nginx/html/deploy.py /usr/share/nginx/html/raw_html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
