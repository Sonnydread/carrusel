import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: false })
  ])
  const [isPlaying, setIsPlaying] = useState(false)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll
      if (!autoScroll) return

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop

      resetOrStop()
      callback()
    },
    [emblaApi]
  )

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play
    playOrStop()
  }, [emblaApi])

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    setIsPlaying(autoScroll.isPlaying())
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
  }, [emblaApi])
const array = [
  {
  src: "/imgcarousel/--2.png",
  alt:"img-2"
}, 
{
  src: "/imgcarousel/--3.png",
  alt:"img-2"
}, 
{
  src: "/imgcarousel/-.png",
  alt:"img-2"
}, 
]
  return (
    <div className="max-w-[48rem] mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex backface-hidden touch-pan-y touch-pinch-zoom -ml-4">
          {array.map((item, index) => (
            <div className="flex-0 flex-[0_0_calc(45%)] min-w-0 pl-4" key={index}>
              <div className="flex items-center justify-center h-[19rem] text-[4rem] font-semibold shadow-inner rounded-[1.8rem]">
                
                <div key={index} className="embla__slide w-[300px]"><img src={item.src} alt={item.alt} /></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] justify-between gap-[1.2rem] mt-[1.8rem]">
        <div className="grid grid-cols-2 gap-[0.6rem] items-center">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
            className="inline-flex items-center justify-center w-[3.6rem] h-[3.6rem] rounded-full shadow-inner bg-transparent cursor-pointer border-0 p-0 m-0 text-body disabled:text-high-contrast"
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
            className="inline-flex items-center justify-center w-[3.6rem] h-[3.6rem] rounded-full shadow-inner bg-transparent cursor-pointer border-0 p-0 m-0 text-body disabled:text-high-contrast"
          />
        </div>

        <button
          className="inline-flex items-center justify-center self-end min-w-[8.4rem] p-0 px-6 font-bold text-[1.4rem] text-body bg-transparent cursor-pointer border-0 shadow-inner rounded-[1.8rem]"
          onClick={toggleAutoplay}
          type="button"
        >
          {isPlaying ? 'Stop' : 'Start'}
        </button>
      </div>
    </div>
  )
}

export default EmblaCarousel
