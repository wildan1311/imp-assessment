<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'author',
        'status',
        'published_at',
    ];

    protected $casts = [
        'published_at' => 'datetime',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($post) {
            $post->status ??= 'draft'; // Default status to 'draft'
            if($post->status === 'published' && !$post->published_at)
            {
                $post->published_at = now();
            }
        });

        static::saving(function ($post) {
            if ($post->status === 'published' && !$post->published_at) {
                $post->published_at = now();
            }
        });
    }

}
