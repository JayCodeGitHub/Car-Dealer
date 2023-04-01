import Hero from "@/components/hero/hero";
import { mainPageItems } from "@/components/assets/items/mainPageItems";
import { Container, Typography } from "@mui/material";

export default function Home() {
  const {
    title,
    description,
    button,
    buttonHref,
    secondButton,
    secondButtonHref,
    img,
  } = mainPageItems.heroItems;
  return (
    <main>
      <Hero
        primary
        title={title}
        description={description}
        button={button}
        buttonHref={buttonHref}
        secondButton={secondButton}
        secondButtonHref={secondButtonHref}
        img={img}
      />
      <Container maxWidth="xl">
        <Typography
          variant="body1"
          sx={{ mt: 3, padding: "1rem", fontSize: "1.1rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Pellentesque nec nam aliquam sem et tortor. Nunc mi ipsum faucibus
          vitae aliquet nec ullamcorper sit. Leo integer malesuada nunc vel.
          Dolor morbi non arcu risus quis varius quam quisque. Pellentesque diam
          volutpat commodo sed egestas egestas fringilla phasellus faucibus. Leo
          in vitae turpis massa sed elementum. Pulvinar sapien et ligula
          ullamcorper malesuada proin libero nunc. Quis commodo odio aenean sed
          adipiscing diam donec adipiscing tristique. Morbi tristique senectus
          et netus. Rhoncus dolor purus non enim praesent elementum facilisis
          leo. Venenatis urna cursus eget nunc scelerisque viverra. Viverra
          accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Ac auctor
          augue mauris augue neque gravida. Pretium aenean pharetra magna ac
          placerat vestibulum lectus mauris ultrices. Pellentesque habitant
          morbi tristique senectus et netus et malesuada. Nibh tortor id aliquet
          lectus proin. Interdum varius sit amet mattis vulputate enim nulla.
          Sapien et ligula ullamcorper malesuada proin libero. Magna sit amet
          purus gravida quis blandit. In metus vulputate eu scelerisque felis.
          Feugiat vivamus at augue eget. Auctor augue mauris augue neque gravida
          in fermentum et. Donec ac odio tempor orci dapibus ultrices in
          iaculis. Nam at lectus urna duis. Enim blandit volutpat maecenas
          volutpat blandit aliquam etiam erat velit. In ante metus dictum at
          tempor. Suspendisse in est ante in nibh mauris. Et pharetra pharetra
          massa massa ultricies mi. Mi tempus imperdiet nulla malesuada
          pellentesque. Ultricies tristique nulla aliquet enim tortor at auctor
          urna. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Non
          enim praesent elementum facilisis. Odio ut sem nulla pharetra diam
          sit. Dui sapien eget mi proin sed. Id nibh tortor id aliquet lectus
          proin nibh nisl. Risus ultricies tristique nulla aliquet enim tortor
          at. Viverra justo nec ultrices dui. Leo a diam sollicitudin tempor id
          eu nisl nunc. Velit laoreet id donec ultrices tincidunt arcu non
          sodales neque. Sagittis nisl rhoncus mattis rhoncus urna neque.
          Euismod in pellentesque massa placerat duis ultricies lacus. Id diam
          maecenas ultricies mi eget. Quam vulputate dignissim suspendisse in.
          Elit pellentesque habitant morbi tristique senectus et netus et. Vel
          orci porta non pulvinar neque laoreet suspendisse interdum
          consectetur. Eget dolor morbi non arcu risus quis varius quam quisque.
          Diam volutpat commodo sed egestas egestas fringilla phasellus
          faucibus. Fringilla urna porttitor rhoncus dolor. Donec massa sapien
          faucibus et molestie ac feugiat. Elit duis tristique sollicitudin nibh
          sit. Enim ut sem viverra aliquet eget sit. Congue mauris rhoncus
          aenean vel elit scelerisque mauris pellentesque pulvinar. Ultrices dui
          sapien eget mi. Netus et malesuada fames ac turpis egestas maecenas
          pharetra convallis. Sed odio morbi quis commodo odio aenean sed
          adipiscing. Ipsum dolor sit amet consectetur adipiscing elit ut. Eros
          donec ac odio tempor orci dapibus ultrices in. Enim nec dui nunc
          mattis enim. Auctor eu augue ut lectus. Consectetur libero id faucibus
          nisl tincidunt. Cursus risus at ultrices mi tempus imperdiet nulla
          malesuada. Adipiscing diam donec adipiscing tristique risus nec. Quis
          blandit turpis cursus in. Posuere lorem ipsum dolor sit amet
          consectetur adipiscing. Vestibulum morbi blandit cursus risus at. Sit
          amet nisl purus in mollis nunc sed id semper. Aenean euismod elementum
          nisi quis eleifend quam adipiscing. Nec feugiat in fermentum posuere
          urna nec. Vestibulum morbi blandit cursus risus at ultrices. Faucibus
          scelerisque eleifend donec pretium vulputate. Ultrices in iaculis nunc
          sed augue lacus viverra. Nulla aliquet enim tortor at. Adipiscing
          tristique risus nec feugiat in fermentum posuere urna. Dignissim enim
          sit amet venenatis urna cursus eget nunc scelerisque. Sem fringilla ut
          morbi tincidunt augue interdum velit euismod. Ac tortor vitae purus
          faucibus ornare suspendisse. Tincidunt eget nullam non nisi est sit
          amet facilisis. Id diam maecenas ultricies mi. Hendrerit gravida
          rutrum quisque non tellus. Dui faucibus in ornare quam viverra orci.
          Commodo viverra maecenas accumsan lacus vel facilisis. Metus aliquam
          eleifend mi in nulla posuere sollicitudin aliquam. A cras semper
          auctor neque vitae. Eu scelerisque felis imperdiet proin fermentum leo
          vel orci porta. Enim ut sem viverra aliquet eget sit amet tellus.
          Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis
          orci. Porttitor rhoncus dolor purus non enim praesent elementum
          facilisis. Eget nunc lobortis mattis aliquam faucibus purus in massa.
          Lorem ipsum dolor sit amet consectetur adipiscing. Quam adipiscing
          vitae proin sagittis nisl rhoncus mattis. Nisl suscipit adipiscing
          bibendum est ultricies integer quis auctor. Placerat duis ultricies
          lacus sed turpis tincidunt. Urna neque viverra justo nec ultrices.
          Ornare aenean euismod elementum nisi quis eleifend quam adipiscing
          vitae. Risus ultricies tristique nulla aliquet enim tortor at auctor.
          Urna neque viverra justo nec ultrices dui sapien eget. Neque laoreet
          suspendisse interdum consectetur. Tempus quam pellentesque nec nam
          aliquam sem et tortor consequat. Scelerisque mauris pellentesque
          pulvinar pellentesque habitant morbi tristique senectus. Purus
          faucibus ornare suspendisse sed nisi lacus sed viverra. In ornare quam
          viverra orci sagittis eu volutpat odio. Fringilla est ullamcorper eget
          nulla facilisi etiam dignissim. Elementum integer enim neque volutpat
          ac. Nibh nisl condimentum id venenatis a. Nibh sed pulvinar proin
          gravida hendrerit lectus. Ultricies leo integer malesuada nunc vel
          risus. Nibh tortor id aliquet lectus. Vitae suscipit tellus mauris a
          diam maecenas sed enim ut. Urna molestie at elementum eu facilisis sed
          odio morbi quis. Ornare aenean euismod elementum nisi quis. Ornare
          quam viverra orci sagittis eu. Varius duis at consectetur lorem donec
          massa sapien. Enim nulla aliquet porttitor lacus luctus accumsan
          tortor. Sit amet facilisis magna etiam tempor orci. Pretium viverra
          suspendisse potenti nullam ac. Gravida rutrum quisque non tellus orci.
          Sit amet tellus cras adipiscing enim eu turpis egestas. Id semper
          risus in hendrerit gravida rutrum quisque non. Dignissim cras
          tincidunt lobortis feugiat vivamus at augue eget arcu. Morbi tristique
          senectus et netus et malesuada. Sit amet mauris commodo quis
          imperdiet. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum
          enim. Tincidunt ornare massa eget egestas purus. Nunc sed id semper
          risus in hendrerit gravida rutrum. Sit amet justo donec enim. Rhoncus
          urna neque viverra justo nec. Id porta nibh venenatis cras sed.
          Ultrices gravida dictum fusce ut placerat orci nulla pellentesque
          dignissim. Semper auctor neque vitae tempus. Mauris augue neque
          gravida in. Eget velit aliquet sagittis id consectetur purus ut
          faucibus. Amet luctus venenatis lectus magna. Aliquet sagittis id
          consectetur purus ut faucibus pulvinar elementum integer. Massa
          tincidunt dui ut ornare lectus sit amet est placerat. Dignissim
          sodales ut eu sem integer vitae justo eget magna. Id donec ultrices
          tincidunt arcu non sodales neque sodales. Sagittis aliquam malesuada
          bibendum arcu vitae. Dignissim enim sit amet venenatis urna cursus.
          Morbi leo urna molestie at elementum eu facilisis sed odio. Ultricies
          integer quis auctor elit. Suspendisse potenti nullam ac tortor vitae.
          Risus viverra adipiscing at in tellus integer feugiat scelerisque.
          Velit ut tortor pretium viverra suspendisse potenti nullam. Odio ut
          enim blandit volutpat maecenas volutpat blandit. Laoreet non curabitur
          gravida arcu ac. Magna fringilla urna porttitor rhoncus dolor purus
          non enim. Tempus egestas sed sed risus. Viverra orci sagittis eu
          volutpat odio facilisis mauris sit amet. Pharetra sit amet aliquam id.
          Tincidunt vitae semper quis lectus nulla at. Tortor posuere ac ut
          consequat semper viverra. Laoreet suspendisse interdum consectetur
          libero id faucibus nisl tincidunt eget. Aenean pharetra magna ac
          placerat vestibulum lectus mauris. Pulvinar etiam non quam lacus
          suspendisse faucibus interdum. Viverra maecenas accumsan lacus vel
          facilisis volutpat. Tempus urna et pharetra pharetra. Ridiculus mus
          mauris vitae ultricies leo integer malesuada. Laoreet non curabitur
          gravida arcu.
        </Typography>
      </Container>
    </main>
  );
}
