<?php

    class Template {

        protected $file;
        private $html;

        public function __construct($file) {
            $this->file = $file;

            if (!file_exists($this->file)) {
                $this->html = "Template file doesn't exists.";
            }

            $this->html = file_get_contents($this->file);
        }
        
        public function output() {
            if (isset($this->html))
                return $this->html;
            return "Template file doesn't exists.";
        }

        public function replace($var, $value) {
            $this->html = str_replace("#".$var, $value, $this->html);
        }
    }

?>