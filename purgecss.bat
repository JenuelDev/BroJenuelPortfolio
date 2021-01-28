cd dist

mkdir result

purgecss --css css/*css --content js/*.js js/*.js.map *.html ../src/**/*.vue ../src/**/*.js -o result

cd ..