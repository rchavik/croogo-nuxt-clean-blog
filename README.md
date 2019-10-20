# Nuxtified plugin for Croogo

## Setup

- Install `croogo/app` normally in `/path/to/mysite.test`, and clone this repository into `APP/plugins/Nuxtified`.

- Use the example nginx vhost configuration below as a reference and customize it, eg: in
    `/etc/nginx/sites-enabled/mysite.test`

```conf

server {
    server_name mysite.test;
    root /path/to/mysite.test/webroot;
    index index.html index.php;

    # pass most requests to nuxt
    location / {
        root /path/to/mysite.test/plugins/Nuxtified/nuxt/dist;
        try_files $uri $uri/ /index.html?$args;
    }

    # pass some requests to croogo
    location ~ ^/(admin|api|assets|croogo|debug.kit|uploads) {
        try_files $uri $uri/ /index.php?$args;
    }

    # pass /admin requests to croogo/cakephp
    location /admin {
        try_files $uri $uri/ /index.php?$args;
    }

    # setup php handler (assuming fastcgi_params is supplied by your distro
    location ~ \.php$ {
        try_files $uri =404;
        include fastcgi_params;
        fastcgi_pass unix:/path/to/your/php-handler;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
}

```

- You will also need to enable cors in your APP:

    composer require ozee31/cakephp-cors

  Enable the Cors plugin in `config/bootstrap.php` or in `APP/src/Application.php`:

```php
    class Application extends BaseApplication
    {
        public function bootstrap()
        {
            // ...
            $this->addPlugin('Cors');
        }
    }
```

- Alternatively, you can pass all request to node during development
```
    location / {
        proxy_redirect off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 1m;
        proxy_connect_timeout 1m;
        proxy_pass http://127.0.0.1:3000;
    }
```

- Add api configuration in `plugins/Nuxtified/nuxt/nuxt.config.js`

```js
{
    api: {
        baseUrl: 'http://mysite.test/api/v1.0',
    },
}
```

- Install nuxt packages and generate the application:

    `( cd plugins/Nuxtified/nuxt && yarn install && yarn run generate )`

  Or during development:
    `( cd plugins/Nuxtified/nuxt && yarn install && yarn run dev )`
