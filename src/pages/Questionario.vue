<template>
<q-page class="q-pa-lg" style="">
  <div class="flex flex-center">
    <!--container-->
    <section>
      <!--questionBox-->
      <div class="questionBox">
        <!-- transition -->
        <transition
          :duration="{ enter: 500, leave: 300 }"
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut"
          mode="out-in"
        >
          <!--qusetionContainer-->
          <div
            class="questionContainer"
            v-if="questionIndex < quiz.questions.length"
            v-bind:key="questionIndex"
          >
            <header>
              <div class="text-center q-pa-md text-h4" style="color:white;">Questionário de Risco</div>
              <!--progress-->
              <div class="progressContainer">
                <progress
                  class="progress is-info is-small"
                  :value="(questionIndex / quiz.questions.length) * 100"
                  max="100"
                  color="red"
                  >{{
                    (questionIndex / quiz.questions.length) * 100
                  }}%</progress
                >
                <p style="color:white;">
                  {{ (questionIndex / quiz.questions.length) * 100 }}% completo
                </p>
              </div>
              <!--/progress-->
            </header>

            <!-- questionTitle -->
            <div class="text-center q-pa-md text-h5">
              {{ quiz.questions[questionIndex].text }}
            </div>

            <!-- quizOptions -->
            <div class="optionContainer">
              <div
                class="option"
                v-for="(response, index) in quiz.questions[questionIndex]
                  .responses"
                @click="selectOption(index)"
                :class="{
                  'is-selected': userResponses[questionIndex] == index
                }"
                :key="index"
              >
                {{ index | charIndex }}. {{ response.text }}
              </div>
            </div>

            <!--quizFooter: navigation and progress-->
            <footer class="questionFooter">
              <!--pagination-->
              <nav class="pagination" role="navigation" aria-label="pagination">
                <!-- back button -->
                <a
                  class="button"
                  v-on:click="prev()"
                  :disabled="questionIndex < 1"
                >
                  Voltar
                </a>

                <!-- next button -->
                <a
                  class="button"
                  :class="
                    userResponses[questionIndex] == null ? '' : 'is-active'
                  "
                  v-on:click="next()"
                  :disabled="questionIndex >= quiz.questions.length"
                >
                  {{ userResponses[questionIndex] == null ? 'Pular' : 'Próximo' }}
                </a>
              </nav>
              <!--/pagination-->
            </footer>
            <!--/quizFooter-->
          </div>
          <!--/questionContainer-->

          <!--quizCompletedResult-->
          <div
            v-if="questionIndex >= quiz.questions.length"
            v-bind:key="questionIndex"
            class="quizCompleted has-text-centered"
          >
            <!-- quizCompletedIcon: Achievement Icon -->
            <span class="icon">
              <i
                class="fa"
                :class="
                  score() > 3
                    ? 'fa-times-circle'
                    : 'fa-check-circle'
                "
              ></i>
            </span>

            <!--resultTitleBlock-->
            <h5 class="title">
              Nossa pesquisa indicou que
              {{
                score() > 7 ? 'voce está em grande risco e deve..' : 'voce está no início de uma situação abusiva e deve..'
              }}

            </h5>
            <p class="subtitle" style="margin-top:45px;">
              Nível de risco: {{ score() }} / {{ quiz.questions.length }}
            </p>
            <br />
            <a class="button" @click="restart()"
              >Reiniciar <i class="fa fa-refresh"></i
            ></a>
            <!--/resultTitleBlock-->
          </div>
          <!--/quizCompetedResult-->
        </transition>
      </div>
      <p class="subtitle" style="margin-top:45px; font-size:1rem">
             *Este questionário foi desenvolvido junto ao curso de Psicologia da ESUCRI e contém perguntas-chave 
             que indicam o nível de risco que você corre dentro de um relacionamento.
            </p>
      <!--/questionBox-->
    </section>
    <!--/container-->
  </div>
  </q-page>
</template>

<script>
var quiz = {
  user: 'Dave',
  questions: [
    {
      text: 'Tem medo do temperamento do seu parceiro(a)?',
      responses: [
        {
          text: 'Sim',
          correct: true
        },
        {
          text: 'Não'
        },
        {
          text: 'Talvez'
        },
        {
          text: 'Nunca'
        }
      ]
    },
    {
      text: 'Tem medo da reação dele(a) quando não têm a mesma opinião?',
      responses: [
        {
          text: 'Sim',
          correct: true
        },
        {
          text: 'Não'
        },
        {
          text: 'Talvez'
        },
        {
          text: 'Nunca'
        }
      ]
    },
    {
      text: 'Você sofre violência psicológica?',
      responses: [
        {
          text: 'Sim',
          correct: true
        },
        {
          text: 'Não'
        },
        {
          text: 'Talvez'
        },
        {
          text: 'Nunca'
        }
      ]
    },
    {
      text: 'Você sofre violência psicológica?',
      responses: [
        {
          text: 'Sim',
          correct: true
        },
        {
          text: 'Não'
        },
        {
          text: 'Talvez'
        },
        {
          text: 'Nunca'
        }
      ]
    },
    {
      text: 'Você sofre violência psicológica?',
      responses: [
        {
          text: 'Sim',
          correct: true
        },
        {
          text: 'Não'
        },
        {
          text: 'Talvez'
        },
        {
          text: 'Nunca'
        }
      ]
    },
    {
      text: 'Você sofre violência psicológica?',
      responses: [
        {
          text: 'Sim',
          correct: true
        },
        {
          text: 'Não'
        },
        {
          text: 'Talvez'
        },
        {
          text: 'Nunca'
        }
      ]
    },
    {
      text: 'Você sofre violência psicológica?',
      responses: [
        {
          text: 'Sim',
          correct: true
        },
        {
          text: 'Não'
        },
        {
          text: 'Talvez'
        },
        {
          text: 'Nunca'
        }
      ]
    },
    {
      text: 'Você sofre violência psicológica?',
      responses: [
        {
          text: 'Sim',
          correct: true
        },
        {
          text: 'Não'
        },
        {
          text: 'Talvez'
        },
        {
          text: 'Nunca'
        }
      ]
    },
    {
      text: 'Você sofre violência psicológica?',
      responses: [
        {
          text: 'Sim',
          correct: true
        },
        {
          text: 'Não'
        },
        {
          text: 'Talvez'
        },
        {
          text: 'Nunca'
        }
      ]
    },
    {
      text: 'Você sofre violência psicológica?',
      responses: [
        {
          text: 'Sim',
          correct: true
        },
        {
          text: 'Não'
        },
        {
          text: 'Talvez'
        },
        {
          text: 'Nunca'
        }
      ]
    }
  ]
},
userResponseSkelaton = Array(quiz.questions.length).fill(null);

export default {
  name: 'Questionario',
  data() {
    return {
      quiz: quiz,
      questionIndex: 0,
      userResponses: userResponseSkelaton,
      isActive: false
    };
  },
  filters: {
    charIndex: function(i) {
      return String.fromCharCode(97 + i);
    }
  },

  computed: {
    userResponse() {
      console.log('acessou a computed');
      return this.userResponses;
    }
  },
  methods: {
    restart: function() {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function(index) {
      // this.userResponses.push(index);
      this.$set(this.userResponses, this.questionIndex, index);
      console.log('selectOption', this.userResponses);
    },
    next: function() {
      if (this.questionIndex < this.quiz.questions.length) this.questionIndex++;
    },

    prev: function() {
      if (this.quiz.questions.length > 0 && this.questionIndex > 0)
        this.questionIndex--;
    },
    // Return "true" count in userResponses
    score: function() {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.quiz.questions[i].responses[this.userResponses[i]] !==
            'undefined' &&
          this.quiz.questions[i].responses[this.userResponses[i]].correct
        ) {
          score = score + 1;
        }
      }
      return score;

      //return this.userResponses.filter(function(val) { return val }).length;
    }
  }
};
</script>

<style scoped lang="scss">
$trans_duration: 0.3s;
$primary_color: #5e79e7;

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,400i,700');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700');

body {
  // font-family: 'Open Sans', sans-serif;
  // font-size: 14px;

  // // height: 100vh;

  // // background: #cfd8dc;

  // /* mocking native UI */
  // cursor: default !important;
  // /* remove text selection cursor */
  // user-select: none;
  // /* remove text selection */
  // user-drag: none;
  // /* disbale element dragging */

  // display: flex;
  // align-items: center;
  // justify-content: center;
}

.button {
  transition: $trans_duration;
}

.title,
.subtitle {
  font-family: Montserrat, sans-serif;
  font-weight: normal;
}

.animated {
  transition-duration: $trans_duration/2;
}

.container {
  margin: 0 0.5rem;
}

.questionBox {
  max-width: 30rem;
  // width: 30rem;
  min-height: 30rem;

  background: #fafafa;
  position: relative;
  display: flex;

  border-radius: 0.3rem;
  overflow: hidden;
  box-shadow: 0 10px 20px #00000030, 0 6px 6px #0000003b;

  header {
    background: #b246c5;
    padding: 1.5rem;
    text-align: center;
    border-bottom: 1px solid #ce3ee7;

    h1 {
      font-weight: bold;
      margin-bottom: 1rem !important;
    }

    .progressContainer {
      width: 60%;
      margin: 0 auto;

      > progress {
        margin: 0;
        border-radius: 5rem;
        overflow: hidden;
        border: none;

        color: $primary_color;

        &::-moz-progress-bar {
          background: $primary_color;
        }

        &::-webkit-progress-value {
          background: $primary_color;
        }
      }

      > p {
        margin: 0;
        margin-top: 0.5rem;
      }
    }
  }

  .titleContainer {
    text-align: center;
    margin: 0 auto;
    padding: 1.5rem;
  }

  .quizForm {
    display: block;
    white-space: normal;

    height: 100%;
    width: 100%;

    .quizFormContainer {
      height: 100%;
      margin: 15px 18px;

      .field-label {
        text-align: left;
        margin-bottom: 0.5rem;
      }
    }
  }

  .quizCompleted {
    width: 100%;
    padding: 1rem;
    text-align: center;
    margin-top: 60px;

    > .icon {
      color: #ff5252;
      font-size: 5rem;
      margin-bottom: 60px;

      .is-active {
        color: #00e676;
      }
    }
  }

  .questionContainer {
    white-space: normal;

    height: 100%;
    width: 100%;

    .optionContainer {
      margin-top: 12px;
      flex-grow: 1;

      .option {
        border-radius: 290486px;
        padding: 9px 18px;
        margin: 0 18px;
        margin-bottom: 12px;
        transition: $trans_duration;
        cursor: pointer;
        background-color: #505b5c1f;
        color: #000000d9;
        border: transparent 1px solid;

        &.is-selected {
          border-color: rgba(#fc0c0c, 0.25);
          background-color: #c085c0;
        }

        &:hover {
          background-color: #c085c0;
        }

        &:active {
          transform: scaleX(0.9);
        }
      }
    }

    .questionFooter {
      background: #db1a1a06;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      width: 100%;
      align-self: flex-end;

      .pagination {
        //padding: 10px 15px;
        margin: 15px 25px;
      }
    }
  }
}

.pagination {
  display: flex;
  justify-content: space-between;
}

.button {
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5rem;
  margin: 0 0.25rem;
  background-color:  #c048c0;
  color: white;

  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: #eceff1;
    border-color: rgba(0, 0, 0, 0.25);
  }

  &.is-active {
    background-color:  #c048c0;
    color: white;
    border-color: transparent;

    &:hover {
      background: darken($primary_color, 10%);
    }
  }
}

@media screen and (min-width: 769px) {
  .questionBox {
    align-items: center;
    justify-content: center;

    .questionContainer {
      display: flex;
      flex-direction: column;
    }
  }
}

@media screen and (max-width: 768px) {
  .sidebar {
    height: auto !important;
    border-radius: 6px 6px 0px 0px;
  }
}
</style>
