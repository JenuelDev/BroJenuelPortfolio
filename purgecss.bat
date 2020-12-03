cd dist

mkdir result

purgecss --css css/*css --content js/*.js js/*.map *.html -o result

cd ..