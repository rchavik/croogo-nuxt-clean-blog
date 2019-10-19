# Nuxtified plugin for CakePHP

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
    location ~ ^/(admin|api|assets|croogo|debug_kit|uploads) {
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

- Customize axios configuration in `plugins/Nuxtified/nuxt/nuxt.config.js`

```js
{
    axios: {
        https: false,
        host: 'mysite.test',
        port: 80,
    }
}
```

- Install nuxt packages and generate the application:

    `( cd plugins/Nuxfied/nuxt && yarn install && yarn run generate )`
