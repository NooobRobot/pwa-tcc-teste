<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline color="primary">
      <q-timeline-entry heading>
        Quem somos nós
      </q-timeline-entry>

      <q-timeline-entry icon="star">
        <template v-slot:title>
          Como tudo começou
        </template>
        <template v-slot:subtitle>
          17 de Agosto de 2020
        </template>

        <div>
         Três jovens que faziam apenas algumas matérias juntos, não se conheciam direito e nunca se falaram, resolveram realizar o Trabalho de Conclusão de Curso juntos.
        </div>
      </q-timeline-entry>

      <q-timeline-entry>
        <template v-slot:title>
          A saga dos três jovens
        </template>
        <template v-slot:subtitle>
          24 de Agosto de 2020
        </template>

        <div>
          Esse trio de jovens é formado por: <br>
          Andressiane Goulart Lino, 23 anos <br>
          Jairo Lino Cardoso, nao sei a idade <br>
          Rafael Pizzeti Cavalcante, não sei a idade <br>
          Ambos estudam na Escola Superior de Criciúma, mais conhecida como ESUCRI.
        </div>
      </q-timeline-entry>

       <q-timeline-entry>
        <template v-slot:title>
          Como escolhemos o tema
        </template>
        <template v-slot:subtitle>
          31 de Agosto de 2020
        </template>

        <div>
         No começo como qualquer acadêmico não tinhamos nenhuma ideia de tema para o TCC. <br>
         Porém, começamos buscar no Google ideias de artigos para possívelmente criarmos um aplicativo. <br>
         Com isso, Andressiane deu a ideia de construirmos um aplicativo de auxilio a mulheres que sofrem Violência Doméstica.
        </div>
      </q-timeline-entry>

       <q-timeline-entry>
        <template v-slot:title>
          Final do TCC I
        </template>
        <template v-slot:subtitle>
          07 de Dezembro de 2020
        </template>

        <div>
         Ao decorrer dos 6 meses de aulas e investimentos intensos no artigo do TCC, finalmente apresentamos a primeira parte. <br>
         E agora, partiremos para o desenvolvimento do aplicativo.
        </div>
      </q-timeline-entry>

      <q-timeline-entry heading>
        2021..
      </q-timeline-entry>

      <q-timeline-entry icon="star">
        <template v-slot:title>
          Desenvolvimento do aplicativo
        </template>
        <template v-slot:subtitle>
          25 de Fevereiro de 2021
        </template>

        <div>
         Ideia vai e ideia vem e não sabiamos como começar o aplicativo. Por fim e com ajuda do Orientador, decidimos desenvolver um aplicativo em IONIC.
        </div>
      </q-timeline-entry>

      <q-timeline-entry>
        <template v-slot:title>
          A mudança..
        </template>
        <template v-slot:subtitle>
          29 de Março de 2021
        </template>

        <div>
          No meio do desenvolvimento do aplicativo, em conversa conjunta com os três colegas, foi decidido que não criariamos um aplicativo e não usariamos IONIC.<br>
          Decidimos que seria uma PWA e usariamos o framework QUASAR, nodejs e Vuejs.
        </div>
      </q-timeline-entry>

      <q-timeline-entry>
        <template v-slot:title>
          Continuação..
        </template>
        <template v-slot:subtitle>
          03 de Maio de 2021
        </template>

        <div>
          Esta semana do dia 03 de Maio, foi a semana mais complicada que tivemos, infelizmente o desenvolvimento de uma PWA não é tão simples como pensam.<br>
          Tivemos muitas dificuldades ao longo desses 6 meses, e com o prazo de entrega meio apertado, tanto nós como nosso orientador ficou desesperado rs.
        </div>
      </q-timeline-entry>

      <q-timeline-entry>
        <template v-slot:title>
          O fim..
        </template>
        <template v-slot:subtitle>
          07 de Junho de 2021..
        </template>

        <div>
         Nesta data já estaremos entregando nosso aplicativo pronto. Perfeito para uso e para apresentação do nosso TCC parte final.
        </div>
      </q-timeline-entry>
      <q-timeline-entry heading>
        THE END !
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>