# Ladataan nginx image public reposta
# otetaan perusimage (nginx = nginx:latest)

FROM nginx

# Kopioidaan html/js sisältö nginx containerin tiedostojärjestelmään
# Web sisältö ./sourcen alla

COPY ./source/* /usr/share/nginx/html/

# Annetaan vinkki / muuttuja joka kertoo mikä portti tulisi avata
# Porttien avaamisen ja bindaamisen hoitaa varsinaisesti 'docker run -p $'

EXPOSE 80
