import { useState, useEffect } from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getRecipeImageFallback, getRecipeImageUrl } from '@/utils/recipeImages';

interface RecipeImageProps {
  recipe: {
    id: string;
    title: string;
    image?: string;
    category?: string;
    subcategory?: string;
    videoUrl?: string;
  };
  className?: string;
  imgClassName?: string;
}

export function RecipeImage({ recipe, className, imgClassName }: RecipeImageProps) {
  const primarySrc = getRecipeImageUrl(recipe);
  const fallbackSrc = getRecipeImageFallback(recipe);
  const [src, setSrc] = useState(primarySrc);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setSrc(getRecipeImageUrl(recipe));
    setFailed(false);
  }, [recipe.id, recipe.image, recipe.videoUrl, recipe.category, recipe.subcategory]);

  if (failed) {
    return (
      <div
        className={cn(
          'bg-muted text-muted-foreground flex flex-col items-center justify-center gap-2',
          className
        )}
      >
        <UtensilsCrossed className="size-8 opacity-40" />
        <span className="max-w-[90%] truncate px-2 text-center text-[10px] font-medium">
          {recipe.title}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={recipe.title}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      className={cn('size-full object-cover', imgClassName, className)}
      onError={() => {
        if (src !== fallbackSrc) {
          setSrc(fallbackSrc);
          return;
        }
        setFailed(true);
      }}
    />
  );
}
