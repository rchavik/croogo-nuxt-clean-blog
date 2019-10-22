<?php

namespace Nuxtified\Shell;

use Cake\Core\Plugin;
use Cake\Console\Shell;

class ConfigShell extends Shell
{
    public function initialize()
    {
        $this->loadModel('Croogo/Settings.Settings');
    }

    public function getOptionParser()
    {
        return parent::getOptionParser()
            ->addSubCommand('generate', [
                'help' => 'Generate Croogo settings file for nuxt consumption',
            ]);
    }

    public function generate()
    {
        $settings = $this->Settings->find()
            ->where([
                $this->Settings->aliasField('key') . ' LIKE' =>'Site.%',
            ]);

        $config = [];
        foreach ($settings as $setting) {
            list(, $key) = explode('.', $setting->key);
            $config[$key] = $setting->value;
        }

        $file = Plugin::path('Nuxtified') . 'nuxt/croogo.config.js';
        if (file_put_contents($file, 'export default ' . json_encode($config, JSON_PRETTY_PRINT))) {
            $this->success("$file written successfully");
        }
    }

}
