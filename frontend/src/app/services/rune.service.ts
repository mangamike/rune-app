import { Injectable } from '@angular/core';
import { Rune } from '../models/rune.model';

@Injectable({
  providedIn: 'root'
})
export class RuneService {
  private runes: Rune[] = [
    {
      name: 'Fehu',
      meaning: 'Wealth, abundance, luck',
      reversedMeaning: 'Loss, greed, instability',
      imageUrl: 'assets/runes/fehu.png',
      history: `Fehu is the first rune of the Elder Futhark and symbolizes cattle, which represented wealth in early Germanic societies. It was used to invoke prosperity and fertility.`
    },
    {
      name: 'Uruz',
      meaning: 'Strength, vitality, health',
      reversedMeaning: 'Weakness, obsession, lack of motivation',
      imageUrl: 'assets/runes/uruz.png',
      history: `Uruz represents the aurochs, a now-extinct wild ox. In Norse culture, it signified brute strength, primal power, and courage in the face of challenges.`
    },
    {
      name: 'Thurisaz',
      meaning: 'Conflict, protection, reactive force',
      reversedMeaning: 'Danger, betrayal, chaos',
      imageUrl: 'assets/runes/thurisaz.png',
       history: `Thurisaz is associated with the giants (Jotnar) of Norse mythology and the hammer of Thor. It represents chaos and power that must be respected and controlled.`
    },
    {
      name: 'Ansuz',
      meaning: 'Communication, wisdom, divine message',
      reversedMeaning: 'Miscommunication, deception, misunderstanding',
      imageUrl: 'assets/runes/ansuz.png',
      history: `Ansuz is linked to the god Odin and represents divine inspiration, communication, and the power of words. It is often associated with wisdom and the transmission of knowledge.`
    },
    {
      name: 'Raidho',
      meaning: 'Journey, movement, life path',
      reversedMeaning: 'Delays, disorder, stagnation',
      imageUrl: 'assets/runes/raidho.png',
      history: `Raidho symbolizes the journey and the path one takes in life. It is associated with travel, movement, and the rhythm of life. In a reversed position, it can indicate delays or obstacles in one's journey.`
    },
    {
      name: 'Kenaz',
      meaning: 'Knowledge, enlightenment, vision',
      reversedMeaning: 'Darkness, confusion, loss of insight',
      imageUrl: 'assets/runes/kenaz.png',
      history: `Kenaz represents a torch or a flame and symbolizes knowledge, enlightenment, and the light of understanding. It is associated with creativity and the pursuit of truth.`
    },
    {
      name: 'Gebo',
      meaning: 'Gift, generosity, connection',
      reversedMeaning: 'Obligation, imbalance, manipulation',
      imageUrl: 'assets/runes/gebo.png',
      history: `Gebo symbolizes the concept of gift and generosity. It represents the balance of giving and receiving, and the connections formed through these acts. In a reversed position, it can indicate imbalance or manipulation in relationships.`
    },
    {
      name: 'Wunjo',
      meaning: 'Joy, harmony, success',
      reversedMeaning: 'Sorrow, disharmony, frustration',
      imageUrl: 'assets/runes/wunjo.png',
      history: `Wunjo represents joy, harmony, and the successful completion of a journey. It is associated with the idea of community and the bonds that bring people together. In a reversed position, it can indicate sorrow or disharmony within these connections.`
    },
    {
      name: 'Hagalaz',
      meaning: 'Disruption, transformation, storm',
      reversedMeaning: 'Unavoidable crisis, chaos, testing limits',
      imageUrl: 'assets/runes/hagalaz.png',
      history: `Hagalaz represents the destructive forces of nature, such as storms and hail. It symbolizes disruption and transformation, often through difficult or challenging experiences. In a reversed position, it can indicate an unavoidable crisis or a need to confront chaos in one's life.`
    },
    {
      name: 'Nauthiz',
      meaning: 'Need, struggle, resistance',
      reversedMeaning: 'Neglect, despair, emotional blocks',
      imageUrl: 'assets/runes/nauthiz.png',
      history: `Nauthiz represents the concept of need and necessity. It signifies the struggles and challenges one must face to achieve their goals. In a reversed position, it can indicate neglecting one's needs or feeling overwhelmed by emotional blocks.`
    },
    {
      name: 'Isa',
      meaning: 'Stillness, pause, reflection',
      reversedMeaning: 'Stagnation, isolation, coldness',
      imageUrl: 'assets/runes/isa.png',
      history: `Isa represents stillness and the need for reflection. It signifies a pause in action, allowing for contemplation and inner clarity. In a reversed position, it can indicate stagnation or a feeling of being stuck.`
    },
    {
      name: 'Jera',
      meaning: 'Harvest, cycles, reward',
      reversedMeaning: 'Delays, setbacks, bad timing',
      imageUrl: 'assets/runes/jera.png',
      history: `Jera represents the cycle of the year and the concept of harvest. It signifies the rewards of hard work and the natural cycles of life. In a reversed position, it can indicate delays or setbacks in achieving these rewards.`
    },
    {
      name: 'Eihwaz',
      meaning: 'Endurance, death, transformation',
      reversedMeaning: 'Confusion, destruction, obstacles',
      imageUrl: 'assets/runes/eihwaz.png',
      history: `Eihwaz represents the yew tree and symbolizes endurance, death, and transformation. It is associated with the idea of resilience in the face of challenges. In a reversed position, it can indicate confusion or obstacles in the path of transformation.`
    },
    {
      name: 'Perthro',
      meaning: 'Mystery, fate, chance',
      reversedMeaning: 'Secrets, missed opportunities, manipulation',
      imageUrl: 'assets/runes/perthro.png',
      history: `Perthro is associated with mystery, fate, and the unknown. It represents the idea of chance and the unfolding of events beyond our control. In a reversed position, it can indicate secrets being kept, missed opportunities, or manipulation of fate.`
    },
    {
      name: 'Algiz',
      meaning: 'Protection, divine shield, awakening',
      reversedMeaning: 'Vulnerability, recklessness, danger',
      imageUrl: 'assets/runes/algiz.png',
      history: `Algiz is a symbol of protection and divine guidance. It represents the idea of a shield against negativity and harm. In a reversed position, it can indicate vulnerability or a lack of awareness of potential dangers.`
    },
    {
      name: 'Sowilo',
      meaning: 'Victory, success, energy',
      reversedMeaning: 'Destruction, false hope, burnout',
      imageUrl: 'assets/runes/sowilo.png',
      history: `Sowilo is a symbol of the sun and represents victory, success, and energy. It signifies the achievement of goals and the positive energy that comes from overcoming challenges. In a reversed position, it can indicate destruction, false hope, or burnout from excessive striving.`
    },
    {
      name: 'Tiwaz',
      meaning: 'Honor, justice, leadership',
      reversedMeaning: 'Injustice, imbalance, conflict',
      imageUrl: 'assets/runes/tiwaz.png',
      history: `Tiwaz is a symbol of honor and justice. It represents the qualities of leadership and the pursuit of truth. In a reversed position, it can indicate injustice, imbalance, or conflict arising from a misuse of power.`
    },
    {
      name: 'Berkana',
      meaning: 'Growth, fertility, new beginnings',
      reversedMeaning: 'Stagnation, infertility, family issues',
      imageUrl: 'assets/runes/berkana.png',
      history: `Berkana is a symbol of growth and fertility. It represents new beginnings and the potential for development. In a reversed position, it can indicate stagnation or issues related to family and nurturing.`
    },
    {
      name: 'Ehwaz',
      meaning: 'Movement, progress, trust',
      reversedMeaning: 'Disharmony, mistrust, obstacles',
      imageUrl: 'assets/runes/ehwaz.png',
      history: `Ehwaz is a symbol of movement and progress. It represents trust and the idea of partnership. In a reversed position, it can indicate disharmony or obstacles in relationships and collaborations.`
    },
    {
      name: 'Mannaz',
      meaning: 'Humanity, relationships, self',
      reversedMeaning: 'Isolation, ego, manipulation',
      imageUrl: 'assets/runes/mannaz.png',
      history: `Mannaz is a symbol of humanity and represents the qualities of relationships and the self. It signifies the importance of community and connection. In a reversed position, it can indicate isolation, egoism, or manipulation in relationships.`
    },
    {
      name: 'Laguz',
      meaning: 'Intuition, flow, emotion',
      reversedMeaning: 'Emotional blockage, confusion, delusion',
      imageUrl: 'assets/runes/laguz.png',
      history: `Laguz is a symbol of intuition and the flow of emotions. It represents the idea of going with the flow and trusting one's instincts. In a reversed position, it can indicate emotional blockages, confusion, or delusions about one's feelings.`
    },
    {
      name: 'Ingwaz',
      meaning: 'Fertility, potential, inner growth',
      reversedMeaning: 'Lack of closure, inner turmoil, infertility',
      imageUrl: 'assets/runes/ingwaz.png',
      history: `Ingwaz is a symbol of fertility and potential. It represents the idea of inner growth and the completion of a cycle. In a reversed position, it can indicate a lack of closure, inner turmoil, or issues related to fertility.`
    },
    {
      name: 'Dagaz',
      meaning: 'Breakthrough, awakening, clarity',
      reversedMeaning: 'Resistance to change, confusion, fear of success',
      imageUrl: 'assets/runes/dagaz.png',
      history: `Dagaz is a symbol of breakthrough and awakening. It represents clarity and the dawn of a new day. In a reversed position, it can indicate resistance to change, confusion, or a fear of success.`
    },
    {
      name: 'Othala',
      meaning: 'Heritage, legacy, ancestry',
      reversedMeaning: 'Separation, isolation, loss of tradition',
      imageUrl: 'assets/runes/othala.png',
      history: `Othala is a symbol of heritage and legacy. It represents the importance of ancestry and the ties that bind us to our past. In a reversed position, it can indicate separation, isolation, or a loss of tradition.`
    }
  ];

  drawRandomRunes(count: number): Rune[] {
    const shuffled = [...this.runes].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map(rune => ({
      ...rune,
      isReversed: Math.random() < 0.5 // randomly reversed
    }));
  }

  getAllRunes(): Rune[] {
    return this.runes;
  }

   getRuneByName(name: string): Rune | null {
  return this.runes.find(r => r.name.toLowerCase() === name.toLowerCase()) || null;
}
}
